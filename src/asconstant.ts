// here we have to learn about as constant 

const userRoles={
    admin:"admin",
    editor:"editor",
    manager:"manager"
} as const   // as const use korle akhane read only hoye jabe . mane value r chnge kore jabe na .


const canEdit=(value:keyof typeof userRoles)=>{
    if(userRoles.admin==='admin'|| userRoles.editor==='editor'){
        return true;
    }
    else {
        return false;
    }
}
