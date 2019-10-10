import { render } from '@testing-library/react';
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OutboundLink from '../OutboundLink';

describe('OutboundLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com">
        Test
      </OutboundLink>,
    );
  });

  it('should render SVG when `hasIcon` is true', () => {
    const wrapperWithIcon = render(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon
      >
        Test
      </OutboundLink>,
    );

    expect(wrapperWithIcon.container.querySelector('svg')).not.toBeNull();
  });

  it('should not render SVG when `hasIcon` is false', () => {
    const wrapperWithoutIcon = render(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
      >
        Test
      </OutboundLink>,
    );

    expect(wrapperWithoutIcon.container.querySelector('svg')).toBeNull();
  });
});
