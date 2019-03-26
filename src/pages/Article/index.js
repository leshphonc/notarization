import React, { Component } from 'react';
import { List, Empty } from 'antd';
import DynamicTitle from '../../components/DynamicTitle/index';
import { connect } from 'dva';
import styles from '@/pages/ReportDownload/index.less';
import router from 'umi/router';
import listStyles from '@/components/List/index.less';

@connect(({ global }) => ({
  global,
}))
class Index extends Component {
  componentWillMount() {
    const { articleId } = this.props.location.query;
    this.props.dispatch({
      type: 'global/fetchArticle',
      payload: {
        id: articleId,
      },
    });
  }

  goArticle = (id) => {
    router.replace({
      pathname: '/article',
      query: {
        module: '相关内容',
        articleId: id,
      },
    });
    this.props.dispatch({
      type: 'global/fetchArticle',
      payload: {
        id,
      },
    });
  };

  preArt = (id) => {
    const { module } = this.props.location.query;
    router.replace({
      pathname: '/article',
      query: {
        module: module,
        articleId: id,
      },
    });
    this.props.dispatch({
      type: 'global/fetchArticle',
      payload: {
        id,
      },
    });
  };

  afterArt = (id) => {
    const { module } = this.props.location.query;
    router.replace({
      pathname: '/article',
      query: {
        module: module,
        articleId: id,
      },
    });
    this.props.dispatch({
      type: 'global/fetchArticle',
      payload: {
        id,
      },
    });
  };

  render() {
    const { article } = this.props.global;
    return (
      <DynamicTitle>
        {article.title ? <div style={{ padding: '0 134px' }}>
          <div className={styles['title']}>{article.title}</div>
          <div className={styles['desc']}>
            <div>发表时间：{article.createDate}</div>
            <div>来源：{article.articleData.copyfrom || article.user.name}</div>
          </div>
          <div className={styles['content']}
               dangerouslySetInnerHTML={{ __html: article.articleData && article.articleData.content }}/>
          <div className={styles['next-before']}>
            <div onClick={this.preArt.bind(null, article.pre && article.pre.id)} style={{
              width: 300,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }} title={article.pre ? article.pre.title : ''}>上一篇：{article.pre ? article.pre.title : '无'}</div>
            <div onClick={this.afterArt.bind(null, article.after && article.after.id)} style={{
              width: 300,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }} title={article.after ? article.after.title : ''}>下一篇：{article.after ? article.after.title : '无'}</div>
          </div>
          <div>
            <div className={styles['list-title']}>相关内容</div>
            <List itemLayout="horizontal"
                  dataSource={article.relationList}
                  renderItem={item => {
                    return <List.Item onClick={this.goArticle.bind(null, item[1])}>
                      <List.Item.Meta
                        title={<div className={listStyles['list-item']} style={{ paddingLeft: 18 }}>{item[2]}</div>}/>
                      <div>{item[3]}</div>
                    </List.Item>;
                  }}/>
          </div>
        </div> : <Empty/>}
      </DynamicTitle>
    );
  }
}

export default Index;
