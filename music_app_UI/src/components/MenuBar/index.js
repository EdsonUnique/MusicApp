import React, { PureComponent } from 'react'
import { TabBar } from 'antd-mobile'
import Router from 'umi/router'
import PropTypes from 'prop-types'

import { ReactComponent as UserCenterIcon } from '@/assets/icon/用户_empty.svg'
import { ReactComponent as MusicStoreIcon } from '@/assets/icon/音乐库_empty.svg'
import styles from './MenuBar.less'

const tabBarData = [
  {
    title: '媒体库',
    icon: MusicStoreIcon,
    link: '/main',
  },

  {
    title: '我的',
    icon: UserCenterIcon,
    link: '/userCenter',
  },



]

class MenuBar extends PureComponent {



  render() {
    const { isMenubar, children, pathname } = this.props

    return (
      <TabBar hidden={isMenubar}>
        {tabBarData.map(({ title, icon: Icon, selectedIcon, link }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<Icon width="22px" height="22px" />}
            selectedIcon={<Icon width="22px" height="22px" className={styles['selected-icon']} />}
            selected={pathname === link }
            onPress={() => Router.push(`${link}`)}
          >
            {/* 匹配到的children路由进行渲染 */}
            {(children.props.location.pathname === link
            )
              && children}
          </TabBar.Item>
        ))}
      </TabBar>
    )
  }
}

MenuBar.defaultProps = {
  isMenubar: false,
  children: null,
  pathname: '/',
}

MenuBar.propTypes = {
  isMenubar: PropTypes.bool,
  children: PropTypes.node,
  pathname: PropTypes.string,
}

export default MenuBar
