function checkEnvVar({ name, allowEmpty }) {
  if (
    process.env[name] === undefined ||
    (allowEmpty === false && process.env[name] === "")
  ) {
    throw new Error(
      `${name} is undefined` + (allowEmpty === false ? " or empty" : "")
    );
  }
  console.log(`${name}=${process.env[name]}`);
}

checkEnvVar({ name: "GITEA_ACTION", allowEmpty: false });
checkEnvVar({ name: "GITEA_ACTION_REPOSITORY", allowEmpty: true /* allows to be empty for local actions */ });
checkEnvVar({ name: "GITEA_ACTION_REF", allowEmpty: true /* allows to be empty for local actions */ });
