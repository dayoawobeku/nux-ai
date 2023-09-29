import Image from "next/image";
import Dropdown from "./dropdown";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-5">
      <a href="/">
        <Image
          src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png"
          alt="Logo"
          width={70}
          height={24}
        />
      </a>
      <ul className="flex items-center gap-6">
        <li className="text-sm">
          <Dropdown
            item="Industries"
            items={[
              "Retail and consumer goods",
              "European institutions",
              "Success cases",
              "Banking & capital markets",
              "Energy utilities & environment",
              "Insurance",
              "Industry and services",
              "Public administration",
              "Telecom & media",
            ]}
          />
        </li>
        <li className="text-sm">
          <Dropdown
            item="Regions"
            items={["Spain", "Americas", "Emea and apac"]}
          />
        </li>
        <li className="text-sm">
          <Dropdown
            item="We are VASS"
            items={["VASS team", "About us", "CSR", "Vass Worldwide"]}
          />
        </li>
        <li className="text-sm">
          <Dropdown
            item="What we do"
            items={["Impacts", "Method", "Technologies", "Cases technologies"]}
          />
        </li>
        <li className="text-sm">
          <a
            href="https://vasscompany.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Partners
          </a>
        </li>
        <li className="text-sm">
          <Dropdown item="Insights" items={["Insight", "Podcasts"]} />
        </li>
        <li className="text-sm">
          <a
            href="https://vasscompany.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            News
          </a>
        </li>
        <li className="text-sm">
          <a
            href="https://vasscompany.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </li>
        <li className="text-sm">
          <Dropdown
            item="Join us!"
            items={[
              "Spain",
              "Peru",
              "Chile",
              "UK",
              "Mexico",
              "Colombia",
              "Benelux",
              "DACH",
            ]}
          />
        </li>
        <button className="text-sm">ES</button>
      </ul>
    </nav>
  );
}
