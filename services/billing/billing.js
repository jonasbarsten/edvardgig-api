import stripePackage from "stripe";
import { calculateCost } from "../../libs/billing-lib";
import { success, failure } from "../../libs/response-lib";

import createLicense from '../licenses/create';
import { listLicenses } from '../licenses/list';

export async function main(event, context) {
  
  const { product, email, source } = JSON.parse(event.body);
  const amount = calculateCost(product);
  const userId = event.requestContext.identity.cognitoIdentityId;
  const description = `Charge for ${product}`;
  const usersLicenses = await listLicenses(userId);
  const usersLicensesJSON = JSON.parse(usersLicenses.body);

  let licenseExists = false;

  for (var i = 0; i < usersLicensesJSON.length; i++) {
    if (usersLicensesJSON[i].product === product) {
      licenseExists = true;
      break;
    }
  }

  if (licenseExists) {
    return failure({ message: 'You already have this license' });
  }

  if (amount === 0) {
    return failure({ message: 'No matching products' });
  }

  const license = await createLicense(userId, product);

  if (license.statusCode !== 200) {
    return failure({ message: 'Could not create license' });
  }

  // Load our secret key from the  environment variables
  const stripe = stripePackage(process.env.stripeSecretKey);

  try {
    await stripe.charges.create({
      source,
      amount,
      description,
      receipt_email: email,
      statement_descriptor: `Edvard Gig - ${product}`,
      currency: "usd",
      metadata: { email, license: license.body }
    });
    return success({ status: true });
  } catch (e) {
    return failure({ message: e.message });
  }
}