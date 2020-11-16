export class Parks {
    constructor(
        public id: string,
        public parkName: string,
        public description: string,
        public pointOfInterest: string,
        public address: string,
        public mnMap: string,
        public imageUrl: string,
        public photoGallery: Array<String>,
        public zipcode: string,
        public hours: string,
        public activities: Array<String>
    ) { }
}