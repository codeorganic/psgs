import { useGithubToolbarPlugins, useGithubJsonForm } from "react-tinacms-github";
import { usePlugins } from "tinacms/build/react-tinacms";
import { MarkdownFieldPlugin, HtmlFieldPlugin } from "react-tinacms-editor";
import { GitFile } from "react-tinacms-github/dist/form/useGitFileSha";


export default function Setup(
    file: GitFile,
) {
    const formOptions = {
        label: 'Blog Post',
        fields: [
          {
            name: 'body',
            component: 'html',
          },
        ],
      };
      const [data, form] = useGithubJsonForm(file, formOptions);
      usePlugins([form, MarkdownFieldPlugin, HtmlFieldPlugin]);
    
      useGithubToolbarPlugins();

      return {
          data,
          form
      }
}