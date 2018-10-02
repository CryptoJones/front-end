/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mount } from 'enzyme';

import FormTextArea from '../FormTextArea';

describe('FormTextArea', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormTextArea />);
  });

  test('should render with placeholder', () => {
    createSnapshotTest(<FormTextArea placeholder="testplaceholder" />);
  });

  test('should call onChange from props after onChange', () => {
    const onChangeMock = jest.fn();
    const wrap = mount(<FormTextArea onChange={onChangeMock} id="test" />);
    wrap.find('textarea').simulate('change', {
      target: { value: 'Test' },
    });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toBeCalledWith('Test');
  });
});
