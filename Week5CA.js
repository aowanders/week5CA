class Camper {
    constructor (year, model, length){
    this.camperYear = year;
    this.camperName = model;
    this.camperLength = length;
    }
    describe (){
    return `${this.camperName} is a ${this.camperYear}, and is ${this.camperLength} feet long looking for a pull-thru site.`;
    }
    }
    
    class Campground {
    constructor (name, bigRig, underThirtyFeet){
    this.campgroundName = name;
    this.campGroundBigRig = bigRig;
    this.campgroundUnderThirtyFeet = underThirtyFeet;
    this.campsite = [];
    }
    addCampsite (campsite){
    if (campsite instanceof Campsite){
    this.campsite.push(campsite);
    }else{
    throw new Error (`You can only add the number of an available campsite here. This is not a valid new entry: ${campsite}`);
    }
    }
    describe(){
    return `${this.campgroundName} has ${this.campgroundUnderThirtyFeet} available campsites, and ${this.campGroundBigRig} available sites!`;
    }
}
class Menu {
    constructor () {
        this.campgrounds = [];
        this.campground = null;
    }
    start (){
        let userSelection = this.showCampergroundOptions();
        while (userSelection != 0) {
            switch (userSelection){
                case '1': 
                    this.createCampground();
                    break;
                case '2': 
                    this.addAvailableSite();
                    this.deleteCampsite();
                    break;
                case '3': 
                    this.deleteCampground();
                    break;
                case '4': 
                    this.createCamper();
                    this.addCamperToCampground();
                    break;
                default:
                    selection = 0;
            }
            userSelection = this.showCampergroundOptions();
        }
        alert('Goodbye!');
    }
    showCampergroundOptions() {
        return prompt(`
        0) Exit
        1) Add A Campground
        2) View A Campground
        3) Delete A Campground
        4) Add A Camper
        `);
    }
    showCamperSiteOptions (campInfo){
        return prompt(`
        0) Back
        1) Check Out of a site and add it back to available roster
        2) Extend your stay and delete your campsite off of the availability list.
        3 Report something to the ranger about your campsite.
        ---------------------------------------------------------
        ${campInfo}
        `);
    }
    displayCampgrounds (){
        let campgrounds = '';
        for(let i = 0; i <this.campgrounds.length; i++)
            campgrounds += i + ') ' + this.campgrounds[i].name +'\n';
        alert(campgrounds);
    }
    createCampground () {
        let name = prompt('Enter new campground name:');
        let bigRig = prompt('Enter the number of available big rig sites:');
        let underThirtyFeet = prompt('Enter the number of available under 30 feet sites:');
        this.campgrounds.push(new Campground(name, bigRig, underThirtyFeet));
    }
    addAvailableSite (){
        let userSelection = prompt ('Enter Your Sites Number to make it available to the next camper')
        let deleteCampsite = prompt ('Extend your reservation by entering your campsite number and there will be additional charges.')
    }
}
let menu = new Menu();
menu.start();