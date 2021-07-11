import React from "react";
import PropTypes from "prop-types";
import StatInfo from "./StatInfo";
import s from "./Profile.module.css";
import default_avatar from "../default_avatar.jpg";

const Profile = ({ users }) => {
  const { avatar, name, tag, location, stats } = users;
  return (
    <div class={s.profile}>
      <div class={s.description}>
        <img src={avatar} alt="Аватар пользователя" class={s.avatar} />
        <p class={s.name}>{name}</p>
        <p class={s.tag}>@{tag}</p>
        <p class={s.location}>{location}</p>
      </div>

      <StatInfo {...stats} />
    </div>
  );
};

Profile.defaultProps = {
  avatar: default_avatar,
};

Profile.propTypes = {
  users: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
export default Profile;
