import React, { PureComponent } from 'react'
import {TabBar} from 'antd-mobile'
import NProgress from 'nprogress'
import withRouter from 'umi/withRouter'
import { connect } from 'dva'
import '@/layouts/nprogress.less'
import router from 'umi/router'
import MainMusicStore from '@/pages/musicStore/mainMusicStore'
import MainUserCenter from "@/pages/userCenter/mainUserCenter";
import MusicStoreIcon from '@/assets/icon/音乐库.svg'
import MusicStoreIcon_empty from '@/assets/icon/音乐库_empty.svg'
import userCenterIcon from '@/assets/icon/用户.svg'
import userCenterIcon_empty from '@/assets/icon/用户_empty.svg'
NProgress.configure({ showSpinner: false })

class BasicLayout2 extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'musicStore',
      hidden: false,
    };
  }

  render() {

    const {children}=this.props;

    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="媒体库"
          key="musicStore"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url('+MusicStoreIcon_empty+') center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(`+MusicStoreIcon+`) center center /  21px 21px no-repeat` }}
          />
          }
          selected={this.state.selectedTab === 'musicStore'}
         // badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'musicStore',
            });
            router.push("/musicStore")
          }}
        >
          <MainMusicStore/>
        </TabBar.Item>



        <TabBar.Item
          title="用户"
          key="userCenter"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url('+userCenterIcon_empty+') center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url('+userCenterIcon+') center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'userCenter'}
          onPress={() => {
            this.setState({
              selectedTab: 'userCenter',
            });

            router.push("/userCenter");
          }}
        >
          <MainUserCenter/>
        </TabBar.Item>
      </TabBar>
    )
  }
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(BasicLayout2))
