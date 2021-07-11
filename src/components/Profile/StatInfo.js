import React from "react";
import s from "./Profile.module.css";

const StatInfo = ({ followers, views, likes }) => {
  return (
    <ul className={s.stats}>
      <li>
        <span class={s.label}>Followers</span>
        <span class={s.quantity}>{followers}</span>
      </li>
      <li>
        <span class={s.label}>Views</span>
        <span class={s.quantity}>{views}</span>
      </li>
      <li>
        <span class={s.label}>Likes</span>
        <span class={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

export default StatInfo;
