import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = { ...{
    // default options
  },  ...opts };
	var blockManager = editor.BlockManager;
	var domComps = editor.DomComponents;
	var dType = domComps.getType('default');
	var dModel = dType.model;
	var dView = dType.view;
	
  // Add components
  loadComponents(editor, options);

  // Add blocks
  
	blockManager.add('HTML_LINK',{
	  id:'HTML_LINK',
	  label:'HTML Link',
	  content:{
		  content:'<div class="my-block fa fa-paint-brush">LINK</div>',
		  type:'HTML_LINK'
	  },
	});


  
	domComps.addType('HTML_LINK', {
		model: dModel.extend({
		  defaults: Object.assign({}, dModel.prototype.defaults, {
			traits: [
			  // strings are automatically converted to text types
			  'name',
			  {
				type: 'select',
				label: 'Link Type',
				name: 'type',
				options: [
				  {value: 'email', name: 'E-mail'},
				  {value: 'link', name: 'Link'},
				  {value: 'tel', name: 'Telephone'}
				]
			  },
			  {
				  type:'HTML_LINK_INPUT',
				  label:'URL',
				  name:'html_link'
			  },		  
			  ], 
		  }),
		}, {
		  isComponent: function(el) {
			if(el.tagName == 'INPUT'){
			  return {type: 'input'};
			}
		  },
		}),

		view: dView,
	});
	
	editor.TraitManager.addType('HTML_LINK_INPUT', {
		events: {
			'click': 'selectFlow', // trigger parent onChange method on keyup
		},

		selectFlow: function () {
			alert('open popup');
			//$('#"+ InitiateJobButton.Id +"').trigger('click');
		}
	});
   
  loadBlocks(editor, options);
  
 
  // TODO Remove
  //editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 }))
};
