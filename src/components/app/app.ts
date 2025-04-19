import { Article } from '../../types/article';
import { Source } from '../../types/source';
import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e: MouseEvent) =>
                this.controller.getNews(e, (data: Article[]) =>
                    this.view.drawNews({ articles: data }) 
                )
            );
        this.controller.getSources((data: Source[]) => this.view.drawSources({ sources: data })); 
    }
}

export default App;
