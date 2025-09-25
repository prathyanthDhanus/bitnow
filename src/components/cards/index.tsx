import React from "react";
import FeatureCard from "./FeatureCard";
import { ProfileCard } from "./ProfileCard";

type CardType = "feature" | "profile";

interface CardFactoryProps {
  type: CardType;
  props: any;
}

export const Card: React.FC<CardFactoryProps> = ({ type, props }) => {
  switch (type) {
    case "feature":
      return <FeatureCard {...props} />;
    case "profile":
      return <ProfileCard {...props} />;

    default:
      return null;
  }
};
