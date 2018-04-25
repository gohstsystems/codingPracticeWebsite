//Practice App 1, Profile Card

function Profile(id, name, exp)
{
 this.id = id,
 this.name = name,
 this.exp = exp ,
 this.lv = exp/100
}

profile1 = new Profile(0, "Shawn", 10000);

console.log(profile1);