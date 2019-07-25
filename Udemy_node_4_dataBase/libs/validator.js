module.exports={
	username(user){
		if(!user){
			return '此用戶不能為空';
		}else if(user.length>32){
			return '用戶名最長為32字';
		}else if(!/\w{3,32}$/.test(user)){
			return '格式不對';
		}else{
			return null;
		}
	},
	password(password){
		if(!password){
			return '密碼不能為空';
		}else if(password.length>32){
			return '密碼最長為32字';
		}else{
			return null;
		}
	}
}