import { useState } from "react";
import Head from "next/head";
import Department from "./components/Department";
import { departmentData } from "./api/departments";
import { companyData } from "./api/company";
import styles from "../styles/Home.module.scss";

export default function Home({ company, departments }) {
  const [activeBrandId, setActiveBrandId] = useState(0);

  const currentDate = new Date(Date.now()).toDateString();
  const activeLogoUrl = `/logos/${activeBrandId}.PNG`;

  const Departments = departments.map(
    ({ id, name, totalCost, employeeCost, companyCost }) => {
      return (
        <Department
          key={id}
          id={id}
          name={name}
          totalCost={totalCost}
          employeeCost={employeeCost}
          companyCost={companyCost}
        />
      );
    }
  );

  return (
    <div className={`brand${activeBrandId}`}>
      <Head>
        <title>Benefit Summary Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img className={styles.logo} src={activeLogoUrl} />
        <address className={styles.address}>
          1600 Utica Ave S Ste 200
          <br /> Minneapolis​, MN, 55416-3652
          <br />
          United States
        </address>
        <h1 className={styles.reportName}>Benefits Summary Report</h1>
        <p className={styles.date}>{currentDate}</p>
      </header>

      <main className={styles.main}>
        <select
          id="brandSelect"
          name="brand"
          className={styles.brandSelect}
          defaultValue={0}
          onChange={(e) => {
            setActiveBrandId(Number(e.target.value));
          }}
        >
          <option value={0}>Brand A</option>
          <option value={1}>Brand B</option>
        </select>
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>
            Insurance Cost at the Company level
          </h2>
          <p>Total Cost of Insurance: ${company.totalCost}</p>
          <p>Total Paid by Employees: ${company.employeeCost}</p>
          <p>Total Paid by Company: ${company.companyCost}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>
            Insurance Cost at the Department level
          </h2>
          {Departments}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const company = await getCompanyData();
  const departments = await getDepartmentsData();

  if (!company || !departments) {
    return {
      notFound: true,
    };
  }

  return {
    props: { company, departments },
  };
}

async function getCompanyData() {
  // accessing data directly to allow use with getStaticProps
  // const res = await fetch(`http://localhost:3000/api/company`);
  // const data = await res.json();

  const data = companyData;

  return data;
}

async function getDepartmentsData() {
  // accessing data directly to allow use with getStaticProps
  // const res = await fetch(`http://localhost:3000/api/departments`);
  // const data = await res.json();

  const data = departmentData;

  return data;
}
