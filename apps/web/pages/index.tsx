import dynamic from "next/dynamic";
import FooterComponent from "../components/layout/footer.component";
import HeaderComponent from "../components/layout/header.component";
import Features from "../components/marketing/features";
import GetStartedHero from "../components/marketing/get-started-hero";
import Hero from "../components/marketing/hero";

const FAQs = dynamic(() => import("../components/marketing/faq"));

export default function Index({ stars }) {
  return (
    <div className="h-full dark:bg-gray-800">
      <HeaderComponent />

      <main>
        <Hero stars={stars} />
        <Features />
        <FAQs />
        <GetStartedHero />
      </main>

      <FooterComponent />
    </div>
  );
}

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/techulus/changes-page",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response?.ok) {
      return null;
    }

    const json = await response.json();

    return parseInt(json["stargazers_count"]).toLocaleString();
  } catch (error) {
    return null;
  }
}

export async function getStaticProps() {
  const stars = await getGitHubStars();

  return {
    props: {
      stars,
    },
    revalidate: 86400,
  };
}
