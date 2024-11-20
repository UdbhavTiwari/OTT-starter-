import React from "react";
import { AppContext } from "../../providers/AppProvider/AppContext";
import { useProfiles } from "../../providers/AppProvider/hooks";
import CreateProfileForm from "./CreateProfileForm";

export function ManageProfiles() {
  const profiles = useProfiles(1);

  return (
    <div>
      {profiles.map((profile) => {
        return <div key={profile.id}>{profile.name}</div>;
      })}
      <CreateProfileForm />
    </div>
  );
}
