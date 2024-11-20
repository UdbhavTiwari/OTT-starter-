import React from "react";
import { AppContext } from "./AppContext";

export function useProfiles(userId = 1) {
  const { appState } = React.useContext(AppContext);
  if (appState.profiles) {
    return appState.profiles.filter((profile) => profile.userId === userId);
  }
  return [];
}

export function useUsers() {
  const { appState } = React.useContext(AppContext);
  return appState.users || [];
}

export function useContent(genre) {
  const { appState } = React.useContext(AppContext);

  if (genre && appState.content) {
    return appState.content.filter((item) => item.genre.includes(genre)) || [];
  }
  return appState.content || [];
}
