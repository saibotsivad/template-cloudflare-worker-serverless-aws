# template-cloudflare-worker-serverless-aws

This is a template that I ([saibotsivad](https://davistobias.com)) have been using a bit, to make it real easy to start a Cloudflare Worker project backed by AWS services.

You can use it like:

```bash
npx degit saibotsivad/template-cloudflare-worker-serverless-aws demo-cfworker
cd demo-cfworker
cp secrets.example.sh secrets.sh
# then go add your Cloudflare details
npm install
npm run build
npm run deploy
```

This template is in active development as I fiddle around with lots of pieces of work and add in lessons learned and all that.

If you have questions or comments, feel free to open an issue in this repo to start a chat about anything you have in mind!

Made with love ❤️ by [Tobias Davis](https://davistobias.com)

*All original content released and published under the [Very Open License](http://veryopenlicense.com).*
