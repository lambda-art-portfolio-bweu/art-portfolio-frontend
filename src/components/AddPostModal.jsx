import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Typography, Select } from "antd";
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

function AddPostModal(props) {
    const [visible, setVisible] = useState();
    const [post, setPost] = useState({
      name: '',
      description:'',
      categories: [],
      url:'',
    });

    useEffect(() => {
        setVisible(false);
    }, [props])

    // Modal global actions
    const showModal = () => setVisible(true);

    const handleOk = () => {
      props.createPost({ ...post, artist_id: props.id });
      setVisible(false);
    };

    // const createPost= () => {
    //   console.log(post);
    // };

    const handleCancel = () => setVisible(false);

    // Modal categories actions
    const handleChange = (target) => {
        setPost({...post,[target.id]: target.value});
    };

        const handleCategories = value => {
          setPost({ ...post, categories: value });
        };

    return (
      <div>
        <Button
          type="primary"
          onClick={showModal}
          style={{ margin: "0.8rem" }}
        >
          Add a Post
        </Button>
        <Modal
          visible={visible}
          title="Add New Image"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={props.adding}
              onClick={handleOk}
            >
              Add now
            </Button>
          ]}
        >
          <Title level={4}>Title</Title>
          <Input
            placeholder="Add title of your image"
            id="name"
            onChange={e => handleChange(e.target)}
          />

          <Title level={4}>Description</Title>
          <textarea
            id="description"
            value={post.description}
            onChange={e => handleChange(e.target)}
          />
          {/* <TextArea
            placeholder="Add the description of your image"
            autosize={{ minRows: 4, maxRows: 6 }}
            onPressEnter={handleChange}
          /> */}

          <Title level={4}>Categories</Title>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select at least one category"
            id="categories"
            onChange={handleCategories}
            optionLabelProp="label"
          >
            <Option value="sport" label="Sport">
              Sport
            </Option>
            <Option value="art" label="Art">
              Art
            </Option>
            <Option value="abstract" label="Abstract">
              Abstract
            </Option>
          </Select>

          <Title level={4}>Direct link to your image</Title>
          <Input
            placeholder="Example: https://website.com/image.jpeg"
            id="url"
            onChange={e => handleChange(e.target)}
          />
        </Modal>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    adding: state.postsReducer.adding
  }
};

export default connect(mapStateToProps, { createPost } )(AddPostModal);