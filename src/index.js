import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function render(node, searchApi, domain) {
    ReactDOM.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <App searchApi={searchApi} domain={domain}/>
            </QueryClientProvider>
        </React.StrictMode>,
        node
    );
}

function run() {
    if (process.env.NODE_ENV === 'production') {
        window.AnyclipSearchWidget = ({ node: $container, searchApi, domain }) => {
            const node = document.createElement("div");
            node.style.width = '100%';
            $container.insertBefore(node, $container.firstChild);
            render(node, searchApi, domain);
        }
    } else {
        render(document.getElementById('root'));
    }
}

run();
