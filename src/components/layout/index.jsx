import {useEffect, useState} from 'react';
import {Layout as RALayout} from '@ra-lib/components';
import {getQuery} from '@ra-lib/util';
import {APP_NAME, CONFIG_HOC, HASH_ROUTER} from 'src/config';
import {getLoginUser, toLogin, getCurrentPageConfig} from 'src/commons';
import Header from './header';
import logo from './logo/logo.png';
import getMenus from 'src/menus';

// 如果其他组件有需求，可以通过layoutRef获取到Layout中一系列方法、数据，
// 注意 layoutRef.current可能不存在
export const layoutRef = {current: null};

// 处理函数配置
export function layoutHoc(options) {
    return WrappedComponent => {
        const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

        const WithLayout = props => {
            let nextState = getOptions(options);

            nextState = Object.entries(nextState)
                .reduce((prev, curr) => {
                    const [key, value] = curr;
                    if (typeof value === 'function') prev[key] = value(props);
                    return prev;
                }, {});

            if (Object.keys(nextState).length && props.active !== false) {
                // Warning: Cannot update a component (`ForwardRef`) while rendering a different component (`withLayout(Connect(WithAjax(WithConfig(UserEdit))))`).
                setTimeout(() => {
                    layoutRef?.current?.setState(nextState);
                });
            }

            return <WrappedComponent {...props}/>;
        };

        WithLayout.displayName = `WithLayout(${componentName})`;

        return WithLayout;
    };
}

export default function Layout(props) {
    const {
        auth,
        layoutType,
        showHeader,
        showHeaderSideToggle,
        showSide,
        showTab,
        showTabSideToggle,
        showTabHeaderExtra,
        showPageHeader,
        showSearchMenu,
        persistTab,
        keepMenuOpen,
        sideCollapsed,
        selectedMenuPath,
        pageTitle,
        breadcrumb,
        appendBreadcrumb,
        headerTheme,
        sideTheme,
    } = getOptions();

    if (auth && !getLoginUser()) toLogin();

    const [refresh, setRefresh] = useState({});
    const [menus, setMenus] = useState([]);

    // 系统菜单只有layout会用到，放到这里来获取
    useEffect(() => {
        (async () => {
            const loginUser = getLoginUser() || {};
            const menus = await getMenus(loginUser.id);
            setMenus(menus);
        })();
    }, []);

    useEffect(() => {
        // Layout有可能不渲染，layoutRef.current 有可能是null
        if (!layoutRef?.current?.setState) return;

        let nextState = {
            layoutType,
            showHeader,
            showHeaderSideToggle,
            showSide,
            showTab,
            showTabSideToggle,
            showTabHeaderExtra,
            showPageHeader,
            showSearchMenu,
            persistTab,
            keepMenuOpen,
            sideCollapsed,
            selectedMenuPath,
            pageTitle,
            breadcrumb,
            appendBreadcrumb,
            headerTheme,
            sideTheme,
        };

        // 过滤掉函数，函数由layoutHoc处理
        nextState = Object.entries(nextState).reduce((prev, curr) => {
            const [key, value] = curr;
            if (typeof value !== 'function') prev[key] = value;

            return prev;
        }, {});

        layoutRef.current.setState(nextState);
    }, [
        layoutType,
        showHeader,
        showHeaderSideToggle,
        showSide,
        keepMenuOpen,
        showPageHeader,
        sideCollapsed,
        selectedMenuPath,
        pageTitle,
        breadcrumb,
        appendBreadcrumb,
        showTab,
        persistTab,
        showTabSideToggle,
        showTabHeaderExtra,
        showSearchMenu,
        headerTheme,
        sideTheme,
        refresh,
    ]);

    // 未使用 Layout 中任何功能，直接不渲染Layout
    if (window.location.pathname !== '/layout/setting' && [showHeader, showSide, showTab, showPageHeader, CONFIG_HOC.keepAlive].every(item => !item)) return null;

    return (
        <RALayout
            className="no-print"
            ref={current => layoutRef.current = {...current, refresh: () => setRefresh({})}}
            logo={logo}
            title={APP_NAME}
            menus={menus}
            headerExtra={<Header/>}
            headerTheme={headerTheme}
            sideCollapsed={sideCollapsed}
            showSearchMenu={showSearchMenu}
            showSide={showSide}
            sideTheme={sideTheme}
            keepMenuOpen={keepMenuOpen}
            showHeader={showHeader}
            showHeaderSideToggle={showHeaderSideToggle}
            showPageHeader={showPageHeader}
            // pageHeaderHeight={pageHeaderHeight}
            showTab={showTab}
            persistTab={persistTab}
            // tabHeight={tabHeight}
            layoutType={layoutType}
            keepPageAlive={CONFIG_HOC.keepAlive}
            showTabHeaderExtra={showTabHeaderExtra}
            showTabSideToggle={showTabSideToggle}
            hashRouter={HASH_ROUTER}
            {...props}
        />
    );
};

/**
 * 获取layout用到的配置
 * @param options
 * @returns {{showTab, sideTheme: string, selectedMenuPath, showPageHeader: boolean, showSearchMenu: boolean, auth: boolean, showHeader: boolean, pageTitle, headerTheme: string, persistTab: boolean, sideCollapsed: boolean, showTabHeaderExtra: boolean, appendBreadcrumb, keepMenuOpen: boolean, breadcrumb, showTabSideToggle: boolean, layoutType, showSide, showHeaderSideToggle: boolean}}
 */
function getOptions(options) {
    // 根据 config 高阶组件配置信息，进行Layout布局调整
    const currentPageConfig = options || getCurrentPageConfig();
    const {title: queryTitle} = getQuery();
    let {
        auth,
        layoutType,
        header: showHeader,
        headerSideToggle: showHeaderSideToggle,
        pageHeader: showPageHeader,
        keepMenuOpen,
        side: showSide,
        sideCollapsed,
        selectedMenuPath,
        title: pageTitle,
        breadcrumb,
        appendBreadcrumb,
        tab: showTab,
        persistTab,
        tabSideToggle: showTabSideToggle,
        tabHeaderExtra: showTabHeaderExtra,
        searchMenu: showSearchMenu,
        headerTheme,
        sideTheme,
    } = {...CONFIG_HOC, ...currentPageConfig};

    pageTitle = queryTitle || pageTitle;

    return {
        auth,
        layoutType,
        showHeader,
        showHeaderSideToggle,
        showSide,
        showTab,
        showTabSideToggle,
        showTabHeaderExtra,
        showPageHeader,
        showSearchMenu,
        persistTab,
        keepMenuOpen,
        sideCollapsed,
        selectedMenuPath,
        pageTitle,
        breadcrumb,
        appendBreadcrumb,
        headerTheme,
        sideTheme,
    };
}