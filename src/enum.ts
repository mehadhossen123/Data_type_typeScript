// here we have to learn enum . 
// type UserRole='admin'|"editor"|"manager"
enum UserRole{
    Admin="admin",
    Editor="editor",
    Manager="manager"

}
const canEdit=(value:UserRole)=>{
    if(value===UserRole.Admin || value===UserRole.Editor){
        return true
    }
    else {
    return false
    }
}
const resutl=canEdit(UserRole.Admin);
console.log(resutl)

