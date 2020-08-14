export class Missing {
  public static parameters = ['id'];
  public missingComponent: string;

  public enter(parameters) {
    this.missingComponent = parameters.id;
  }

  public async afterAttach(): Promise<void> {
    console.log('afterAttach: Missing');
  }
}
