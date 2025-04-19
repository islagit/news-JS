import News from './news/news';
import Sources from './sources/sources';
import { Article } from '../../types/article';
import { Source } from '../../types/source';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles?: Article[] }): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: { sources?: Source[] }): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
