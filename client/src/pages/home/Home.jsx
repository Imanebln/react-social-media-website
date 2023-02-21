import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
// import Feed from "../../components/feed/Feed";
import "./home.css";
import { Suspense, lazy } from "react";
const Feed = lazy(() => import("../../components/feed/Feed"));

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar fallback={<div>Loading...</div>} />
        <Suspense>
          <Feed />
        </Suspense>

        <Rightbar />
      </div>
    </>
  );
}

export default Home;
