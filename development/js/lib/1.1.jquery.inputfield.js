(function( $ ){
    var methods = {
        init : function( options ) {
            return this.each(function() {        
                var $this = $(this);
                var _self = this;
                var data = $this.data('inputfield');
                
                var settings = {
                    'dlft': '', 
                    'activeClass' : false,
                    'correctClass' : false,
                    'errorClass' : false,

                    'classParent': 0,
                    'validation' : false,
                    'allowEmpty' : false
                };
                
                // check for the validation properti
                if($this.attr('allowempty'))
                    settings.allowEmpty = true;
                
                // check for the validation properti
                if($this.attr('default'))
                    settings.dflt = $this.attr('default');

                if($this.attr('active-class'))
                    settings.activeClass = $this.attr('active-class');

                if($this.attr('correct-class'))
                    settings.correctClass = $this.attr('correct-class');

                if($this.attr('error-class'))
                    settings.errorClass = $this.attr('error-class');

                if($this.attr('class-parent'))
                    settings.classParent = $this.attr('class-parent');

                if($this.attr('validation') && $this.attr('validation').length != ''){
                    var regEx = false;
                    switch($this.attr('validation')){
                        case 'name':
                        regEx =  /^([aA-zZ \u00E0-\u00FC \- \xC0-\xFF šŠžŽö]){2,75}$/;
                        break;
                        case 'email':
                        regEx =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        break;
                        case 'postalcode':
                        regEx =  /[0-9]{4}\x20?[aA-zZ]{2}/;
                        break;
                        case 'street':
                        regEx =  /^([a-zA-Z 0-9_-]){2,75}$/;
                        break;
                        case 'city':
                        regEx =  /^([a-zA-Z ]){2,75}$/;
                        break;
                        case 'phonenumber':
                        regEx =  /^([0-9]){1}([0-9]{9,10})$/;
                        break;
                        case 'housenumber':
                        regEx =  /^([0-9 aA-zZ\-]){1,10}$/;
                        break;
                        case 'number':
                        regEx =  /^([0-9 \.]){1,}$/;
                        break;
                        case 'location':
                        regEx =  /^([a-zA-Z 0-9_-]){2,75}$/;
                        break;
                        case 'company':
                        regEx =  /^([a-zA-Z 0-9_-]){2,75}$/;
                        break;
                        case 'age':
                        regEx =  /^([0-9]){1,2}$/;
                        break;
                        case 'free':
                        regEx =  /^(.|[\r\n]){2,}$/;
                        break;
                    }
                    
                    if(regEx != false && settings.validation == false){
                        settings.validation = {
                            'type' : 'regex',
                            'data' : regEx,
                            'onkeyup' : true
                        }
                    }
                }
                
                // set the handlers
                $this.focusin(focusinHandler);
                $this.focusout(fucusoutHandler);
                
                // If validation is given it will be added on keyup
                if(settings.validation != false && settings.validation.onkeyup == true){
                    $this.keyup(keyupHandler);
                }
                
                // store the settings
                $this.data('inputfield', {
                    settings:settings,
                    target : _self,
                    val: $this.val()
                });
                
                // Removes all the state classes
                function removeAllStateClasses(){
                    // get the parent of the class
                    var parent = getClassParent();
                    var data = $this.data('inputfield');

                    if(data.settings.activeClass)
                        parent.removeClass(data.settings.activeClass);

                    if(data.settings.correctClass)
                        parent.removeClass(data.settings.correctClass);

                    if(data.settings.errorClass)
                        parent.removeClass(data.settings.errorClass);

                }

                // Adds a state class to the container
                function addStateClass(className){
                    // get the parent of the class
                    var parent = getClassParent();
                    if(className)
                        parent.addClass(className);
                }

                // Returns the class parent (that should contain the state classes);
                function getClassParent(){
                    var parent = $this;
                    var data = $this.data('inputfield');
                    for(var i=0; i<data.settings.classParent; i++){
                        parent = parent.parent();
                    }

                    return parent;
                }

                // focus in handler replaces default texts
                function focusinHandler(e){
                    
                    var data = $this.data('inputfield');
                    if($this.val() == data.settings.dflt){
                        $this.val('');
                        // remove state classes
                        removeAllStateClasses();
                        addStateClass(data.settings.activeClass);
                    }else if($this.val() == ''){
                        // remove state classes
                        removeAllStateClasses();
                        addStateClass(data.settings.activeClass);
                    }
                }
                // focus out handle restores default text if needed
                function fucusoutHandler(e){
                    var data = $this.data('inputfield');
                    if($this.val() == ''){
                        $this.val(data.settings.dflt);

                         // remove state classes
                         removeAllStateClasses();
                     }
                 }
                // key up handler validates the value
                function keyupHandler(e){
                    var data = $this.data('inputfield');
                    if(data.settings.validation != false){
                        this.validate();
                    }
                }
                // update inputfield sets the original value and is called once 
                // once the component is initiated
                function updateInputfield(){
                    var data = $this.data('inputfield');
                    if($this.val() != ''){

                        // validate input
                        _self.validate();
                    }else{
                        $this.val(data.settings.dflt);
                    }
                }
                
                // Validate method validated the input field based on the 
                // input field validation attributioe
                this.validate = function(){
                    var data = $this.data('inputfield');
                    if(this.val() == '' && data.settings.allowEmpty == true || this.val() == data.settings.dflt && data.settings.allowEmpty == true){
                        return true;
                    }
                    switch(data.settings.validation.type){
                        case 'regex':
                        if(data.settings.validation.data.test(this.val())){
                                 // remove state classes
                                 removeAllStateClasses();
                                 addStateClass(data.settings.correctClass);

                                 return true;
                             }else{
                                removeAllStateClasses();
                                addStateClass(data.settings.errorClass);
                                return false;
                            }
                            break;
                        }
                        return true;
                    }
                // Updates the inputfield
                this.update = function(){
                    updateInputfield();
                }
                // Returns the value of an inputfield
                this.val = function(){
                    var data = $this.data('inputfield');
                    
                    var value = $this.val();
                    if(value == data.settings.dflt){
                        value ='';
                    }
                    return value;
                }
                
                // Update the input field
                updateInputfield();
            });
},
reset:function(){
    return this.each(function(){
        var $this = $(this), data = $this.data('inputfield');
        data.val = '';
        data.target.update();
    });
},
value:function(){
            // Only works with one item!
            var val = '';
            this.each(function(){
                var $this = $(this), data = $this.data('inputfield');
                val = data.target.val();
            });
            return val;
        },
        isValid:function(){
            // only works with one item
            var valid = true;
            this.each(function(){
                var $this = $(this), data = $this.data('inputfield');
                valid = data.target.validate();
            });
            return valid;
        },
        isAllValid:function(){
            // only works with one item
            var allValid = true;
            this.each(function(){
                var $this = $(this);
                var data = $this.data('inputfield');
                var valid = data.target.validate();
                if(!valid){
                    allValid = false;
                }
            });
            return allValid;
        }
    };
    $.fn.inputfield = function(method) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }    
    };
})( jQuery );