import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = { ...{
    // default options
  },  ...opts };
	var blockManager = editor.BlockManager;
  // Add components
  loadComponents(editor, options);

  // Add blocks
  
  blockManager.add('HTML_LINK',{
	  id:'HTML_LINK',
	  label:'HTML Link',
	  content:{
		  content:'<div class="my-block">This is a simple block</div>',
		  type:'HTML_LINK'

	  },
  });
  
  
  loadBlocks(editor, options);
  
  
  
  


  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 }))
};
