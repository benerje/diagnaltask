import React, { memo, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, searchContent } from "../actions/userActions";
import { RootState } from "../reducers";
import ImageWithFallback from "./ImageWithFallBack";
import TopNavbar from "./NavBar";

const ContentProfile: React.FC = () => {
  const { searchedContent, searchItem, content, page, error } = useSelector(
    (state: RootState) => state.content
  );
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(fetchData(page));
  };

  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch]);

  const handleBackClick = () => {
    // Handle back button click
  };

  const onSearch = (e: any) => {
    dispatch(searchContent(e.target.value));
  };
  const data = searchItem ? searchedContent : content;

  return (
    <div className="container">
      <TopNavbar onSearch={onSearch} onBackClick={handleBackClick} />
      {searchItem && searchedContent.length === 0 ? (
        <h6 className="no-items">No Items found</h6>
      ) : (
        <InfiniteScroll
          dataLength={content.length}
          next={loadMore}
          hasMore={true}
          loader={
            searchedContent.length > 0 ? (
              ""
            ) : error ? (
              ""
            ) : (
              <h4 className="loader">Loading...</h4>
            )
          }
          scrollableTarget="scrollableDiv"
        >
          <div className="card-list">
            {data.map((item: any, Index: number) => (
              <div key={Index} className="card-content">
                <ImageWithFallback
                  alt={item.name}
                  fallbackSrc="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"
                  src={`https://test.create.diagnal.com/images/${item["poster-image"]}`}
                />
                <div className="card-title">{item.name}</div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default memo(ContentProfile);
