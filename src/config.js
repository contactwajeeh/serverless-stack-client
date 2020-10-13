export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "wajee-notes-app-tutorial"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vmqwwb2m2j.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_LHeT2ehiX",
    APP_CLIENT_ID: "50pf56qbnqm173ld2q00v945gd",
    IDENTITY_POOL_ID: "us-east-1:80f1574d-038a-4d37-9c5f-67b1b1d1dde2"
  }
};