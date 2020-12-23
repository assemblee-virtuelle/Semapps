import React from 'react';
import { useListContext, Link, linkToRecord } from 'react-admin';
import { makeStyles, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import Masonry from 'react-masonry-css';

const useStyles = makeStyles(() => ({
  grid: {
    display: 'flex',
    marginLeft: -20,
    width: 'auto'
  },
  column: {
    paddingLeft: 20,
    backgroundClip: 'padding-box'
  },
  card: {
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}));

/**
 * @example
 * <List component="div" perPage={50} {...props}>
 *   <MasonryList
 *     image={record => record.image}
 *     content={record => (
 *       <>
 *         <Typography variant="subtitle1">{record.title}</Typography>
 *         <Typography variant="body2" color="textSecondary" component="p">{record.description}</Typography>
 *       </>
 *     )}
 *     linkType="show"
 *   />
 * </List>
 */
const MasonryList = ({ image, content, breakpointCols, linkType }) => {
  const classes = useStyles();
  const { ids, data, basePath } = useListContext();
  return (
    <Masonry breakpointCols={breakpointCols} className={classes.grid} columnClassName={classes.column}>
      {ids.map(id => {
        const imageUrl = typeof image === 'function' ? image(data[id]) : image;
        return (
          <Card key={id} className={classes.card}>
            <Link to={linkToRecord(basePath, id) + '/' + linkType}>
              <CardActionArea>
                {imageUrl && <CardMedia className={classes.media} image={imageUrl} />}
                {content && <CardContent>{content(data[id])}</CardContent>}
              </CardActionArea>
            </Link>
          </Card>
        );
      })}
    </Masonry>
  );
};

MasonryList.defaultProps = {
  breakpointCols: { default: 3, 900: 2, 450: 1 },
  linkType: 'edit'
};

export default MasonryList;
