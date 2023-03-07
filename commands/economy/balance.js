module.exports = {
  
  name: "balance",
  aliases: ['bal', 'ball','b','see'],
  code: `$title[Your Balance $username[$findMember[$message]]]
$thumbnail[$userAvatar[$findMember[$message]]]
$description[
<a:lines:897749073820516392> <a:lines:897749073820516392>
 ** Money  $getGlobalUserVar[money;$findMember[$message]]**
<a:lines:897749073820516392> <a:lines:897749073820516392>]
<:money:803125368252268544>
$color[$random[0;999999]]
$footer[@$username]
$addTimestamp`
}