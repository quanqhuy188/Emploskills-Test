"use client";

import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import {
  createProject,
  updateProject,
  deleteProject,
} from "@/services/projectService";
import { Modal, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

interface IProps {
  show: boolean;
  setShow: (v: boolean) => void;
  type: "create" | "update" | "delete";
  projectItem?: IProject | null;
  setProjectItem: (v: IProject | null) => void;
}

function GeneralModal({
  show,
  setShow,
  type,
  projectItem,
  setProjectItem,
}: IProps) {
  const [form] = Form.useForm();
  const [id, setId] = useState<string>("");

  useEffect(() => {
    if (projectItem) {
      form.setFieldsValue(projectItem);
      setId(projectItem.id);
    }
  }, [projectItem, form]);

  const handleClose = () => {
    setShow(false);
    form.resetFields();
    setProjectItem(null);
  };
  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      if (type === "create") {
        await createProject(values);
        toast.success("Tạo dự án thành công!");
      } else if (type === "update") {
        await updateProject({ id, ...values });
        toast.success("Cập nhật dự án thành công!");
      } else if (type === "delete") {
        await deleteProject(id);
        toast.success("Xoá dự án thành công!");
      }

      handleClose();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  return (
    <>
      <Modal
        title={
          type === "delete"
            ? "Xoá dự án"
            : type === "update"
            ? "Sửa dự án"
            : "Tạo dự án"
        }
        centered
        open={show}
        onOk={() => handleSave()}
        onCancel={() => handleClose()}
      >
        {type !== "delete" && (
          <Form
            form={form}
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              name="title"
              label="Tiêu đề"
              rules={[{ required: true, message: "Tiêu đề là bắt buộc" }]}
            >
              <Input placeholder="Nhập tiêu đề" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Thông tin"
              rules={[{ required: true, message: "Thông tin là bắt buộc" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="status"
              label="Trạng thái"
              rules={[{ required: true, message: "Trạng thái là bắt buộc" }]}
            >
              <Input placeholder="Nhập trạng thái" />
            </Form.Item>
            <Form.Item
              name="pictureURL"
              label="URL Youtube Video"
              rules={[{ required: true, message: "URL là bắt buộc" }]}
            >
              <Input placeholder="Nhập URL" />
            </Form.Item>
          </Form>
        )}
        {type === "delete" && <p>Bạn có chắc muốn xoá dự án này?</p>}
      </Modal>
    </>
  );
}

export default GeneralModal;
