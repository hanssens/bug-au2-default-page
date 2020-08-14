export class Welcome {
  public message = 'Welcome to Aurelia 2!';

  public async afterAttach(): Promise<void> {       
    console.log('afterAttach: Welcome');
}
}
