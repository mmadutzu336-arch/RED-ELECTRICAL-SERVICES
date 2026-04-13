import Head from "next/head";
import PersonalSite from "../components/PersonalSite";

export default function Home() {
  return (
    <>
      <Head>
        <title>RED ELECTRICAL SERVICES | Professional Electrician in Larnaca, Cyprus</title>
        <meta
          name="description"
          content="Professional electrical services in Larnaca, Cyprus. Expert installations, repairs, maintenance, and emergency response."
        />
        <meta
          name="keywords"
          content="electrician, Larnaca, Cyprus, electrical services, installation, repair, maintenance"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="RED ELECTRICAL SERVICES" />
        <meta
          property="og:description"
          content="Professional electrical services in Larnaca, Cyprus"
        />
        <meta property="og:type" content="business.business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersonalSite />
    </>
  );
}
