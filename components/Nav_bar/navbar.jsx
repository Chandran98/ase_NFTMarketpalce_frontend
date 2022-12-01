/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import GrHomeRounded from "react-icons/gr";
import BiSearch from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CgProfile from "react-icons/cg";
import { Discover, notification, Profile, Helpcenter, sidebar } from "./index";
import Button from "../component_index";
import images from "../../img";

function navbar() {
  const [Discover, setDiscover] = useState(false);
  const [Helpcenter, setHelpcenter] = useState(false);
  const [Notifications, setNotifications] = useState(false);
  const [Profile, setProfile] = useState(false);
  const [Sidebar, setSidebar] = useState(false);

  function openmenu(e) {}
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}></div>
        <div className={Style.logo}>
          <Image
            src={images.logo}
            alt="NFT Market place"
            width={100}
            height={100}
          />
        </div>
        <div className={Style.navbar_container_left_box_input}>
          <div className={Style.navbar_container_left_box_input_box}>
            <input type="text" placeholder="Search NFT" />
            <BiSearch onClick={() => {}} className={Style.search_con} />
          </div>
        </div>
        <div className={Style.navbar_container_right}></div>
        <div className={Style.navbar_container_right_discover}>
          <p onClick={(e) => {}}> Discover</p>
          <div className={Style.navbar_container_right_discover_box}>
            <Discover />
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
