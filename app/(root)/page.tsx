import { secureHeapUsed } from "crypto";
import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Rightsidebar from "@/components/Rightsidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn)
  

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and Manage your payments and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12809}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <Rightsidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1280},{currentBalance:1280}]}
      />
    </section>
  );
};

export default Home;
