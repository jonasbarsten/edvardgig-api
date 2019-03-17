import stripePackage from "stripe";
import { calculateCost } from "../../libs/billing-lib";
import { success, failure } from "../../libs/response-lib";

import createLicense from '../licenses/create';

export async function main(event, context) {
  // const { storage, source } = JSON.parse(event.body);
  // const amount = calculateCost(storage);
  // const description = "Scratch charge";

  const { product, email, source } = JSON.parse(event.body);
  const amount = calculateCost(product);
  const userId = event.requestContext.identity.cognitoIdentityId;
  const description = `Charge for ${product}`;

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
      metadata: { email, userId, licenseId: license.licenseId }
    });
    return success({ status: true });
  } catch (e) {
    return failure({ message: e.message });
  }
}