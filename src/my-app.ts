export class MyApp {
    public async afterAttach(): Promise<void> {       
        console.log('afterAttach: MyApp');
    }
}
