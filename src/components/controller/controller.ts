import AppLoader from './appLoader';
import { Article } from '../../types/article';
import { Source } from '../../types/source';

class AppController extends AppLoader {
    getSources(callback: (data: Source[]) => void): void {
        super.getResp<Source[]>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: (data: Article[]) => void): void {
        const target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        let currentElement: HTMLElement | null = target;

        while (currentElement && currentElement !== newsContainer) {
            if (currentElement.classList.contains('source__item')) {
                const sourceId = currentElement.getAttribute('data-source-id');

                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<Article[]>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            currentElement = currentElement.parentElement;
        }
    }
}

export default AppController;
