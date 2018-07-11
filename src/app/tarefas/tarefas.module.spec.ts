import { TarefasModule } from './tarefas.module';

describe('TarefasModule', () => {
  let tarefasModule: TarefasModule;

  beforeEach(() => {
    tarefasModule = new TarefasModule();
  });

  it('should create an instance', () => {
    expect(tarefasModule).toBeTruthy();
  });
});
