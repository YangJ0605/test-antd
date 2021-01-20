import React, { memo, Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { Provider } from 'react-redux'
import store from './store'

import routes from '@/router'

import Header from '@/components/header'
import Footer from '@/components/footer'

import { Spin } from 'antd'
export default memo(function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div className='main'>
                    <Suspense
                        fallback={
                            <div className='loading-wrapper'>
                                <Spin size='large' />
                            </div>
                        }
                    >
                        {
                            renderRoutes(routes)
                        }
                    </Suspense>
                </div>
                <Footer />
            </Router>
        </Provider>
    )
})
