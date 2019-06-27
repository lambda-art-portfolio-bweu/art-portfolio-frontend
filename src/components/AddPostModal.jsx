import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Typography, Select } from "antd";

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

export default function AddPostModal(props) {
    const [visible, setVisible] = useState();
    const [adding, setAdding] = useState();

    useEffect(() => {
        setVisible(false);
        setAdding(false);
    }, [props])

    // Modal global actions
    const showModal = () => setVisible(true);

    const handleOk = () => {
        setAdding(true);
        setTimeout(() => {
            setAdding(false);
            setVisible(false);
        }, 3000);
    };

    const handleCancel = () => setVisible(false);

    // Modal categories actions
    const handleChange = (value) => {
        console.log(`selected ${value}`);
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
              loading={adding}
              onClick={handleOk}
            >
              Add now
            </Button>
          ]}
        >
          <Title level={4}>Title</Title>
          <Input placeholder="Add title of your image" />

          <Title level={4}>Description</Title>
          <TextArea
            placeholder="Add the description of your image"
            autosize={{ minRows: 4, maxRows: 6 }}
          />

          <Title level={4}>Categories</Title>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select at least one category"
            // defaultValue={["art"]}
            onChange={handleChange}
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
          <Input placeholder="Example: https://website.com/image.jpeg" />
        </Modal>
      </div>
    );
}
