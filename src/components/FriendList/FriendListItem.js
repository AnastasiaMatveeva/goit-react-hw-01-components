import React, { Fragment } from "react";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const friendStatus = isOnline ? s.statusOnline : s.statusOffline;
  return (
    <Fragment>
      <span className={`${s.status} ${friendStatus}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </Fragment>
  );
};

export default FriendListItem;
