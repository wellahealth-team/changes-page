import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ROUTES } from "../../data/routes.data";
import logoImage from "../../public/images/logo.png";

const version = require("../../package.json").version;

const navigation = {
  solutions: [
    { name: "Zapier", href: ROUTES.ZAPIER },
    { name: "APIs", href: ROUTES.DOCS },
    {
      name: "GitHub",
      href: ROUTES.GITHUB_ACTION,
    },
  ],
  support: [
    { name: "Contact Us", href: ROUTES.SUPPORT },
    { name: "Status", href: ROUTES.STATUS },
  ],
  company: [
    {
      name: "ChangeCraftAI",
      href: ROUTES.GEN_AI,
    },
  ],
  legal: [
    { name: "Privacy", href: ROUTES.PRIVACY },
    { name: "Terms", href: ROUTES.TERMS },
  ],
  social: [],
};

export default function FooterComponent() {
  return (
    <>
      <Script
        src="https://hey.changes.page/v1/widget.js"
        strategy="lazyOnload"
        async
      />

      <footer
        className="bg-gray-900 border-t border-white/10 dark:border-black"
        aria-labelledby="footer-heading"
      >
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <Image
                width={24}
                height={24}
                className={"w-6 h-6"}
                src={logoImage}
                alt="changes.page"
              />

              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Integrations
                  </h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Resources
                  </h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => {
                          // @ts-ignore
                          window?.ChangesPage?.openWidget();
                        }}
                        className="text-sm leading-6 text-gray-300 hover:text-white changes-page-btn"
                      >
                        What&apos;s New
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">
              {version && `v${version} | `} &copy; {new Date().getFullYear()}{" "}
              changes.page, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
