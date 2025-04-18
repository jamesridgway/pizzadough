// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "pizzadough",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("PizzaDough",
      {
        domain: {
          name: 'pizzadough.jamesridgway.co.uk',
          dns: sst.cloudflare.dns()
        }
      }
    );
  },
});
