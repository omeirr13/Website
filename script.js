
let openNav = true;
function nav()
{
    if(openNav)
    {
        document.getElementById("side-bar").style.width = "250px";
        openNav = false;
        return;
    }
    else
    {
        document.getElementById("side-bar").style.width = "0px";
        openNav = true;
    }
}
