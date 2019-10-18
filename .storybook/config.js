import { configure } from '@storybook/angular';

configure([require.context('../src', true, /.stories.ts$/), require.context('../src', true, /.stories.mdx$/)], module);
