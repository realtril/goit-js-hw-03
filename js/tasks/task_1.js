const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let keys of Object.keys(user)) {
  console.log(keys, ":", user[keys]);
}
